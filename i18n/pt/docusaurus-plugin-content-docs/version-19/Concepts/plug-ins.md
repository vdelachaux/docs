---
id: plug-ins
title: Plug-ins
---

As you develop a 4D application, you will discover many capabilities that you did not notice when you started. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## Why the need for a plug-in?

Although 4D provides hundred of built-in methods used to manipulate objects, records and implement user interface, some special use or feature (sometimes platform dependant) may be needed: one may need ODBC under Windows, another may need Apple services under macOS, while yet another may want to implement specific statistics tools, social network login, payment platform, file access over the network, a special user interface, or a private picture structure.

It is obvious that covering all areas of both the macOS and Windows operating systems by way of 4D commands would certainly lead to a product with thousands of commands, and at the same time, most users would have no need for such a large set of capabilities. Also, creating such an all-encompassing tool would make the 4D environment incredibly complex and would take most users months of study before useful results could be expected.

The modular nature of the 4D environment allows the creation of basic applications but does not preclude the development of highly complex systems. The 4D Plug-in architecture opens the 4D environment to any type of application or user. 4D Plug-ins multiply that application or user's power and productivity.

## What is a plug-in and what can it do?

A plug-in is a piece of code that 4D launches at start up. It adds functionality to 4D and thus increases its capacity.

Usually, a plug-in does things that:
- 4D cannot do (ie, specific platform technology),
- will be very hard to write just using 4D,
- are only available as Plug-in Entrypoint

A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process.

- A **plug-in routine** is a routine written in native language (usually C or C++) that causes an action.
- An **external area** is a part of a form that can display almost everything and interact with the user when necessary.
- An **external process** is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process.

### Important note

A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call `PA_Yield()` to give time to the 4D scheduler unless its task is critical for both it and the application.

## How to create a plug-in?

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in.
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.

## Como instalar um plug-in?

Instala-se plug-ins no ambiente 4D copiando os seus arquivos para a pasta apropriada.

As pastas "PluginName.bundle" contêm tanto versões Windows como macOS de plug-ins 4D. A sua arquitetura interna específica permite ao Servidor 4D carregar a versão apropriada de acordo com a plataforma onde a máquina cliente será executada. To install a plug-in in your environment, you just need to put the “PluginName.bundle” folder or package concerned into the desired **Plugins** folder.

You can put the Plugins folder in two different places:

- A nível da aplicação executável 4D, ou seja
  - Em Windows: ao lado do arquivo .exe
  - Under macOS: at the first level of the Contents folder inside the application package. In this case, plug-ins are available in every project opened by this application.
- At the same level as the Project folder. In this case, plug-ins are only available in this particular project.

A escolha da localização depende de como se pretende utilizar o plug-in.

Se o mesmo plug-in for colocado em ambos os locais, 4D só carregará o localizado ao lado da estrutura. Numa aplicação que é compilada e fundida utilizando o Volume Desktop 4D, se existirem várias instâncias do mesmo plug-in presente, isto impedirá a aplicação de abrir.

Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Se qualquer plug-in necessitar de uma licença específica para utilização, será carregado mas não estará disponível para utilização.