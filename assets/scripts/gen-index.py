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

def generate_index_for_directory(dir_path, root_dir):
    rel_path = os.path.relpath(dir_path, root_dir)
    if rel_path == '.':
        display_path = "/RSRC"
    else:
        display_path = f"/RSRC/{rel_path}"

    html_template = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>P480 INDEX OF {display_path} // DFM</title>
    <meta name="description" content="DFM resources: every file in the archive." />
    <meta name="robots" content="noai, noimageai" />
    <meta name="tdm-reservation" content="1" />
    <link rel="stylesheet" href="/assets/dfm/dfm-static.css" />
    <style>
      .ls { width: 100%; border-collapse: collapse; font-size: 0.7em; }
      .ls th { color: var(--tt-magenta); font-weight: 400; text-align: left; border-bottom: 2px solid var(--tt-green); }
      .ls th, .ls td { padding: 0.15em 0.8em 0.15em 0; }
      .ls tr:last-child td { border-bottom: 2px solid var(--tt-green); padding-bottom: 0.4em; }
      .ls a { color: var(--tt-cyan); text-decoration: none; }
      .ls a:hover, .ls a:focus-visible { background: var(--tt-cyan); color: var(--tt-black); }
      .ls .right { text-align: right; }
      .ls-wrap { overflow-x: auto; }
      address { color: var(--tt-green); font-style: normal; font-size: 0.6em; margin-top: 1em; }
    </style>
    <script>
      (function () {
        var d = document.documentElement;
        try {
          if (localStorage.getItem("dfm:plain") === "1") d.setAttribute("data-plain", "");
          if (localStorage.getItem("dfm:scan") === "0") d.setAttribute("data-noscan", "");
        } catch (e) {}
      })();
    </script>
  </head>
  <body>
    <a class="skip-link" href="#main">skip to content</a>
    <dfm-sector-bar current="dfm"></dfm-sector-bar>
    <div class="bezel">
      <div class="screen" data-page="480" data-subpages="0">
        <div class="scanline" aria-hidden="true"></div>
        <header class="tt-head">
          <span class="tt-pnum" data-pnum aria-live="polite">P480</span>
          <span class="tt-title">RSRC_DB</span>
          <label class="tt-jump">JUMP TO: <input type="text" inputmode="numeric" maxlength="3" placeholder="---" aria-label="page number" data-jump autocomplete="off" /></label>
          <span class="tt-clock" data-clock>--:--:--</span>
        </header>
        <div class="tt-flags" aria-live="polite">
          <span data-flag-hold hidden>HOLD</span>
          <span data-flag-sub hidden></span>
          <span data-flag-reveal hidden class="magenta">REVEAL</span>
        </div>
        <nav class="tt-nav" aria-label="pages">
          <a href="/" aria-current="page"><span class="n">480</span>files</a>
          <a href="/html/index.html"><span class="n">481</span>rsrc</a>
          <a href="/html/toolkit.html"><span class="n">482</span>toolkit</a>
          <a href="/html/articles.html"><span class="n">483</span>articles</a>
          <a href="/html/guides.html"><span class="n">484</span>guides</a>
          <a href="https://dontfeedmachines.com/"><span class="n">100</span>dfm</a>
          <a href="https://legal.dontfeedmachines.com/"><span class="n">710</span>legal</a>
        </nav>
        <main id="main" class="tt-body">
          <span class="dh yellow">INDEX OF {display_path}</span>
          <div class="ls-wrap">
            <table class="ls">
              <tr><th>Name</th><th>Last modified</th><th class="right">Size</th><th>Description</th></tr>
{parent_link}
{rows}
            </table>
          </div>
          <address>Apache/2.4.41 (Ubuntu) Server at rsrc.dontfeedmachines.com Port 80</address>
        </main>
        <nav class="tt-fast" aria-label="fastext">
          <a href="/html/index.html" class="f-red" data-fast="r">INDEX<span class="k" aria-hidden="true">R</span></a>
          <a href="/html/toolkit.html" class="f-green" data-fast="g">TOOLKIT<span class="k" aria-hidden="true">G</span></a>
          <a href="/html/articles.html" class="f-yellow" data-fast="y">ARTICLES<span class="k" aria-hidden="true">Y</span></a>
          <a href="/html/guides.html" class="f-cyan" data-fast="b">GUIDES<span class="k" aria-hidden="true">B</span></a>
        </nav>
      </div>
    </div>
    <p class="tt-foot">type any page number // R G Y B for the colored keys // L reveal // H hold // P for subtitles // / search</p>
    <dfm-palette src="#tt-search" placeholder="search pages by number or name"></dfm-palette>
    <dfm-keys lens="REVEAL: show the decoy text crawlers get" plain="SUBTITLES: plain mode"></dfm-keys>
    <script type="application/json" id="tt-map">{"480":"/","481":"/html/index.html","482":"/html/toolkit.html","483":"/html/articles.html","484":"/html/guides.html","100":"https://dontfeedmachines.com/","200":"https://dontfeedmachines.com/manifesto","300":"https://dontfeedmachines.com/words","400":"https://dontfeedmachines.com/kit","500":"https://dontfeedmachines.com/sectors","600":"https://dontfeedmachines.com/posture","700":"https://dontfeedmachines.com/license","800":"https://dontfeedmachines.com/crawlers","888":"https://dontfeedmachines.com/888","999":"https://dontfeedmachines.com/all","710":"https://legal.dontfeedmachines.com/"}</script>
    <script type="application/json" id="tt-search">[{"title":"P480 rsrc files","href":"/","kind":"page"},{"title":"P481 resources","href":"/html/index.html","kind":"page"},{"title":"P482 toolkit","href":"/html/toolkit.html","kind":"page"},{"title":"P483 articles","href":"/html/articles.html","kind":"page"},{"title":"P484 guides","href":"/html/guides.html","kind":"page"},{"title":"P100 DFM index","href":"https://dontfeedmachines.com/","kind":"sector"},{"title":"P710 legal","href":"https://legal.dontfeedmachines.com/","kind":"sector"}]</script>
    <script type="module" src="/assets/dfm/teletext.js"></script>
  </body>
</html>"""

    entries = os.listdir(dir_path)
    entries.sort()
    
    ignored = {'.git', '.github', 'assets', 'index.html', 'CNAME', '.DS_Store'}
    
    dirs = [e for e in entries if os.path.isdir(os.path.join(dir_path, e)) and e not in ignored and not e.startswith('.')]
    files = [e for e in entries if os.path.isfile(os.path.join(dir_path, e)) and e not in ignored and not e.startswith('.')]
    
    rows = []
    
    for d in dirs:
        full_d = os.path.join(dir_path, d)
        mtime = get_git_mtime(full_d)
        rows.append(f'              <tr><td><a href="{d}/">{d}/</a></td><td>{mtime}</td><td class="right">  - </td><td>&nbsp;</td></tr>')
        
    for f in files:
        full_f = os.path.join(dir_path, f)
        mtime = get_git_mtime(full_f)
        size = format_size(os.path.getsize(full_f))
        rows.append(f'              <tr><td><a href="{f}">{f}</a></td><td>{mtime}</td><td class="right">{size}</td><td>&nbsp;</td></tr>')

    parent_link = '              <tr><td><a href="../">Parent Directory</a></td><td>&nbsp;</td><td class="right">  - </td><td>&nbsp;</td></tr>'
    if rel_path == '.':
        parent_link = ''

    index_path = os.path.join(dir_path, 'index.html')
    with open(index_path, 'w', encoding='utf-8') as f:
        final_html = html_template.replace('{display_path}', display_path)
        final_html = final_html.replace('{parent_link}', parent_link)
        final_html = final_html.replace('{rows}', '\n'.join(rows))
        f.write(final_html)

def main():
    root_dir = '.'
    ignored_walk = {'.git', '.github', 'assets'} 
    
    for current_dir, dirs, files in os.walk(root_dir):
        # Prevent walking into ignored directories
        dirs[:] = [d for d in dirs if d not in ignored_walk and not d.startswith('.')]
        generate_index_for_directory(current_dir, root_dir)

if __name__ == "__main__":
    main()
