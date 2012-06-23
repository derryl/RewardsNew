import SimpleHTTPServer
import SocketServer
import mimetypes

# minimal web server.  serves files relative to the
# current directory.

PORT = 7000

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

Handler.extensions_map.update({
    '': 'application/octet-stream', # Default
    '.py': 'text/plain',
    '.c': 'text/plain',
    '.h': 'text/plain',
    '.htc': 'text/x-component',
    '.ttf': 'font/truetype'
    })

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()