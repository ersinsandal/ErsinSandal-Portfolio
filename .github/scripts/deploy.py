import ftplib
import os
import sys

server = os.environ.get('FTP_SERVER', 'ftp.ersinsandal.com')
user = os.environ.get('FTP_USERNAME')
passwd = os.environ.get('FTP_PASSWORD')

if not user or not passwd:
    print("Error: Missing FTP_USERNAME or FTP_PASSWORD")
    sys.exit(1)

print(f"Connecting to {server} as {user}...")
ftp = ftplib.FTP(server, timeout=30)
ftp.login(user, passwd)
ftp.cwd('/public_html')

def upload_dir(local_dir):
    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        if os.path.isdir(local_path):
            try:
                ftp.mkd(item)
            except Exception:
                pass
            ftp.cwd(item)
            upload_dir(local_path)
            ftp.cwd('..')
        else:
            with open(local_path, 'rb') as f:
                ftp.storbinary(f'STOR {item}', f)
                print(f"Uploaded: {item} ({os.path.getsize(local_path)} bytes)")

upload_dir('dist')
ftp.quit()
print("[SUCCESS] Deploy completed successfully!")
