Set shell = Wscript.createobject("wscript.shell")
currentpath = createobject("Scripting.FileSystemObject").GetFile(Wscript.ScriptFullName).ParentFolder.Path
a = shell.run (currentpath +"\arduino\arduino.exe "+currentpath +"\testArduino\testArduino.ino",0)