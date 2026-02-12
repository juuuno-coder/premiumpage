import os

# Path definition
dir_path = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
mount_img = os.path.join(dir_path, "other_wide_mount.jpg")
shock_img = os.path.join(dir_path, "other_wide_shock.jpg")
temp_img = os.path.join(dir_path, "temp_swap.jpg")

# Swap files
if os.path.exists(mount_img) and os.path.exists(shock_img):
    try:
        os.rename(mount_img, temp_img)
        os.rename(shock_img, mount_img)
        os.rename(temp_img, shock_img)
        print("✅ Successfully swapped other_wide_mount.jpg and other_wide_shock.jpg")
    except Exception as e:
        print(f"❌ Error swapping files: {e}")
else:
    print("❌ Files not found. Please check if the files exist.")
