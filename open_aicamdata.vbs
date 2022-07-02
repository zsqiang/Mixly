Set shell = Wscript.createobject("wscript.shell")
currentpath = createobject("Scripting.FileSystemObject").GetFile(Wscript.ScriptFullName).ParentFolder.Path
a = shell.run (currentpath +"\upload_files\data",0)