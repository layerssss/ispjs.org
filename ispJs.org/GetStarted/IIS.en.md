for IIS
=================================
#####ISP.js's getting started document

##Preparing

* Set up an ASP.NET virtual application
* Config the virtual application to intercept all request via managed module.

##Compiling the Source

This project should be delivered with its VisualStudio/MonoDeveloper solution file(ispJs.sln). Open and compile them using your IDE. 

###About Configuration(Debug/Release)

Lots of .NET source code are not caring about the configuration. But ISPjs's behaviours on different configurations varies a lot. So you need to be ware of which configuration you are using now, and you should not use Debug configuration in production environment.  

The best practice is to compile both configurations at first. You should have:  

* Debug configuration at bin\Debug\ispJs.dll
* Release configuration at bin\ispJs.dll

Make sure you have them both and then you can go on :)  
