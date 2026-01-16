import os

src_path = r"d:\코딩\EMT\ko\index.html"
dest_emt_korea = r"d:\코딩\EMT\emt-korea\EMT.html"
dest_global_ko = r"d:\코딩\EMT\emt-global\ko\index.html"

# Read source
with open(src_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Write to emt-korea (Exact copy)
with open(dest_emt_korea, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Updated {dest_emt_korea}")

# 2. Write to Global KO (Adjust ../assets/ to ../../assets/)
content_global = content.replace('../assets/', '../../assets/')
with open(dest_global_ko, 'w', encoding='utf-8') as f:
    f.write(content_global)
print(f"Updated {dest_global_ko}")
