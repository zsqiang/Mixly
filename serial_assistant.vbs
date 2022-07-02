Set shell = Wscript.createobject("wscript.shell")
currentpath = createobject("Scripting.FileSystemObject").GetFile(Wscript.ScriptFullName).ParentFolder.Path
a = shell.run (currentpath +"\tools\serial_assistant.exe",0)