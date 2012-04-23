for IIS
=================================
#####ISP.js's getting started document

##Preparing

* Set up an ASP.NET virtual application
* Config the virtual application to intercept all request via managed module.

##Compiling the Source

This project should be delivered with its VisualStudio/MonoDeveloper solution file(ispJs.sln). Open and compile it using your IDE. 

###About Configuration(Debug/Release)

Lots of .NET source code are not caring about the configuration. But ISPjs's behaviours on different configurations varies a lot. So you need to be ware of which configuration you are using now, and you should not use Debug configuration in production environment.  

See the complete list of differences between the two configurations [here](Docs-Configurations.en)  

##Reference the Binary DLL to Your Project  

ispJs.dll is a managed DLL. Add it to your reference list.  

 