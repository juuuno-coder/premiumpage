import shutil
import os

base_dir = "/Users/admin/.gemini/antigravity/brain/b62bd3fa-cc93-4c90-8722-af4f52b556b9"
out_dir = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
os.makedirs(out_dir, exist_ok=True)

# Mappings based on ls analysis
# Mount Product (Black bracket + White cylinder): media__1770863659999.jpg (79KB)
# Shock Product (Many small brackets): media__1770863635309.jpg (57KB)

mappings = [
    ("media__1770863659999.jpg", "other_wide_mount.jpg"),
    ("media__1770863635309.jpg", "other_wide_shock.jpg")
]

for src_name, dst_name in mappings:
    src_path = os.path.join(base_dir, src_name)
    dst_path = os.path.join(out_dir, dst_name)
    
    if os.path.exists(src_path):
        shutil.copy(src_path, dst_path)
        print(f"✅ Copied {src_name} to {dst_name}")
    else:
        print(f"❌ Source file {src_name} not found.")
