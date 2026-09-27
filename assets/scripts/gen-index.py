import os
import subprocess
import math

def get_git_mtime(filepath):
    try:
        # grab git src info for last modified date
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%cd', '--date=format:%Y-%m-%d %H:%M', '--', filepath],
            capture_output=True, text=True, check=True
        )
        date_str = result.stdout.strip()
        return date_str if date_str else "Unknown"
    except Exception:
        return "Unknown"

def format_size(size_in_bytes):
    if size_in_bytes == 0:
        return "0"
    size_name = (" ", "K", "M", "G", "T")
    i = int(math.floor(math.log(size_in_bytes, 1024)))
    p = math.pow(1024, i)
    s = round(size_in_bytes / p, 1)
    s_str = str(s).replace(".0", "")
    return f"{s_str}{size_name[i]}"

def main():
    # ignore files for git indexing
    ignored = {'.git', '.github', 'assets', 'index.html', 'CNAME'}
    
    html_template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Index of /rsrc</title>
<style>
  body {
    background: #000; color: #fff;
    font-family: monospace; font-size: 20px; line-height: 1.2;
    margin: 0; padding: 20px;
  }
  h1 { background: #00f; color: #ff0; padding: 10px; font-size: 24px; text-transform: uppercase; }
  a { color: #0ff; text-decoration: none; }
  a:hover { background: #0ff; color: #000; }
  table { width: 100%; max-width: 900px; }
  th, td { text-align: left; padding: 4px; }
  th a { color: #f0f; }
  hr { border: 1px solid #0f0; }
  address { color: #0f0; margin-top: 20px; }
  .right { text-align: right; }
</style>
</head>
<body>
  <div class="index-container">
    <h1>Index of /rsrc</h1>
    <table>
      <tr><th><a href="#">Name</a></th><th><a href="#">Last modified</a></th><th class="right"><a href="#">Size</a></th><th><a href="#">Description</a></th></tr>
      <tr><th colspan="4"><hr></th></tr>
      <tr><td><a href="../">Parent Directory</a></td><td>&nbsp;</td><td class="right">  - </td><td>&nbsp;</td></tr>
{rows}
      <tr><th colspan="4"><hr></th></tr>
    </table>
    <address>Apache/2.4.41 (Ubuntu) Server at rsrc.dontfeedmachines.com Port 80</address>
  </div>
</body>
</html>"""

    rows = []
    entries = os.listdir('.')
    entries.sort()
    
    # Separate folders and files
    dirs = [e for e in entries if os.path.isdir(e) and e not in ignored and not e.startswith('.')]
    files = [e for e in entries if os.path.isfile(e) and e not in ignored and not e.startswith('.')]
    
    for d in dirs:
        mtime = get_git_mtime(d)
        rows.append(f'      <tr><td><a href="{d}/">{d}/</a></td><td>{mtime}</td><td class="right">  - </td><td>&nbsp;</td></tr>')
        
    for f in files:
        mtime = get_git_mtime(f)
        size = format_size(os.path.getsize(f))
        rows.append(f'      <tr><td><a href="{f}">{f}</a></td><td>{mtime}</td><td class="right">{size}</td><td>&nbsp;</td></tr>')

    # create final index.html file
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_template.replace('{rows}', '\n'.join(rows)))
        
if __name__ == "__main__":
    main()
