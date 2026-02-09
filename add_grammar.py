#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""批量添加核心语法讲解到nce_lessons_data.js"""

import re
import json

# 读取markdown文件
with open('核心语法讲解列表.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

# 解析语法数据
grammar_data = {}
current_lesson = None

lesson_pattern = r'## Lesson (\d+):'
grammar_pattern = r'### 语法\d+：(.+?)\n\n\*\*讲解\*\*：(.+?)\n\n\*\*例句\*\*：\n((?:\d+\..+?\n?)+)'

for lesson_match in re.finditer(lesson_pattern, md_content):
    lesson_num = int(lesson_match.group(1))
    # 获取该课的内容范围
    start = lesson_match.end()
    next_lesson = re.search(r'## Lesson \d+:', md_content[start:])
    end = start + next_lesson.start() if next_lesson else len(md_content)
    lesson_content = md_content[start:end]
    
    grammar_list = []
    for g_match in re.finditer(r'### 语法\d+：(.+?)\n\n\*\*讲解\*\*：(.+?)\n\n\*\*例句\*\*：\n((?:.+?\n)+?)(?=\n---|\n### |$)', lesson_content):
        topic = g_match.group(1).strip()
        explanation = g_match.group(2).strip()
        examples_text = g_match.group(3).strip()
        
        examples = []
        for line in examples_text.split('\n'):
            line = line.strip()
            if not line or not re.match(r'\d+\.', line):
                continue
            line = re.sub(r'^\d+\.\s*', '', line)
            
            # 解析例句
            if '—' in line:
                # Q&A格式
                parts = line.split('(')
                if len(parts) >= 2:
                    en_part = parts[0].strip()
                    cn_part = parts[1].rstrip(')')
                    q_a = en_part.split('—')
                    if len(q_a) >= 2:
                        examples.append({
                            'en': q_a[0].strip() + ' — ' + q_a[1].strip(),
                            'cn': cn_part.strip(),
                            'answer': q_a[1].strip() if len(q_a) > 1 else ''
                        })
            else:
                # 普通格式
                parts = line.rsplit(' ', 1)
                if len(parts) == 2 and any('\u4e00' <= c <= '\u9fff' for c in parts[1]):
                    examples.append({'en': parts[0].strip(), 'cn': parts[1].strip()})
                else:
                    examples.append({'en': line, 'cn': ''})
        
        if examples:
            grammar_list.append({
                'topic': topic,
                'explanation': explanation,
                'examples': examples[:3]  # 最多3个例句
            })
    
    if grammar_list:
        grammar_data[lesson_num] = grammar_list

print(f"解析到 {len(grammar_data)} 课的语法数据")

# 读取JS文件
with open('nce_lessons_data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# 为每课添加coreGrammar
for lesson_num, grammars in grammar_data.items():
    # 跳过已有的第1课
    if lesson_num == 1:
        continue
    
    # 构建coreGrammar字符串
    grammar_items = []
    for g in grammars:
        # 转义引号
        topic = g['topic'].replace('"', '\\"')
        explanation = g['explanation'].replace('"', '\\"')
        
        examples_str = ',\n                    '.join([
            '{' + f' en: "{e["en"].replace(chr(34), chr(92)+chr(34))}", cn: "{e["cn"].replace(chr(34), chr(92)+chr(34))}"' + (f', answer: "{e.get("answer", "").replace(chr(34), chr(92)+chr(34))}"' if e.get('answer') else '') + ' }'
            for e in g['examples']
        ])
        grammar_items.append(f'''            {{
                topic: "{topic}",
                explanation: "{explanation}",
                examples: [
                    {examples_str}
                ]
            }}''')
    
    core_grammar_str = ',\n'.join(grammar_items)
    core_grammar_block = f''',
        coreGrammar: [
{core_grammar_str}
        ]'''
    
    # 在该课的最后一个 ] 前插入coreGrammar
    pattern = rf'(\n    {lesson_num}: \{{[\s\S]*?sentences: \[[\s\S]*?\])\n    \}}'
    
    def add_grammar(match):
        return match.group(1) + core_grammar_block + '\n    }'
    
    js_content = re.sub(pattern, add_grammar, js_content, count=1)

# 保存更新后的JS文件
with open('nce_lessons_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("完成！已添加核心语法到所有课程。")
