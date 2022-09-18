# Genshin Web APP

Web App about the videogame Genshin Impact. It's a wiki-like page, where you can see characters and weapons from Genshin Impact. 
You can also create new items if you are logged in and have special permission.

The web has been created with React, using hooks and Material UI.

It's hosted at: https://lucky-dango-625f64.netlify.app/

This web APP has a backend made by myself. 
You can find more information at it's repository: https://github.com/MiangaESP/genshin-api

Also, backend API is hosted at: https://genshin-api-mx5a.onrender.com/

## Español

Nada más entrar en la página web podremos ver la página de inicio, la cual tiene en grande el título de la web, así como la cabecera que encontraremos en todas las rutas disponibles.
En dicha cabecera, podremos navegar por distintas rutas:

En Home, el directorio raíz, veremos lo descrito anteriormente.

En Personajes, encontraremos la lista de todos los personajes disponibles almacenados en la API. Podemos filtrar estos personajes según cuatro atributos. Es posible que la primera vez que se acceda a la página tarde un poco en cargar, dado que el servidor donde está hosteada la API se desconecta cada 15 minutos y tarda un rato en reconectarse.

En Armas encontraremos la lista de armas. Las funcionalidades son las mismas que la página de personajes.

La página de Crear mostrará un mensaje avisando de que se tiene que iniciar sesión para poder utilizar sus funcionalidades. Además, dicho usuario tiene que tener permisos para crear un personaje o arma. Si se desea utilizar esta funcionalidad, comunicadlo por el apartado de issues de github.
Una vez conseguimos acceder a las funcionalidades, nos encontraremos con un seleccionador para crear un personaje o arma. Según que elijamos, tendremos que rellenar unos campos, los cuales son todos obligatorios. Una vez rellenados y si no habido ningún problema, tras presionar el botón de enviar, seremos redirigidos a la página principal, indicando que se ha creado el personaje o arma.

En la página de Acerca de, se muestra el creador de la app con los enlaces a github y linkedin.

Por último, tendremos dos botones según si estamos conectados con un usuario o no. En el caso de no haber iniciado sesión, nos aparecerá un botón para ello. Si estamos conectados con un usuario, nos aparecerá el nombre de usuario y un botón para cerrar sesión.

En la página de Iniciar Sesión, nos encontramos un formulario que tendremos que rellenar si tenemos un usuario registrado. Si este no es el caso, bajo el formulario tenemos un enlace a la página de registrarse. En esta página tendremos que rellenar el mismo formulario que el inicio de sesión, pero para registrar el usuario.

## Inglés

As soon as we enter the web page we can see the home page, which has the title of the web in large, as well as the header that we will find in all the available routes.
In this header, we can navigate through different routes:

In Home, the root directory, we will see what was described above.

On Characters, we will find the list of all available characters stored in the API. We can filter these characters based on four attributes. It is possible that the first time the page is accessed, it may take a while to load, since the server where the API is hosted disconnects every 15 minutes and it takes a while to reconnect.

In Weapons we will find the list of weapons. The functionalities are the same as the Characters page.

The Create page will display a message advising that you have to log in to be able to use its features. In addition, said user must have permissions to create a character or weapon. If you want to use this functionality, communicate it through the github issues section.
Once we get access to the functionalities, we will find a selector to create a character or weapon. Depending on what we choose, we will have to fill in some fields, which are all mandatory. Once filled in and if there has been no problem, after pressing the send button, we will be redirected to the main page, indicating that the character or weapon has been created.

On the About page, the creator of the app is displayed with the links to its github and linkedin.

Finally, we will have two buttons depending on whether we are connected to a user or not. In the case of not having logged in, a button will appear for it. If we are connected with a user, the username and a button to close session will appear.

On the Login page, we find a form that we will have to fill out if we have a registered user. If this is not the case, below the form we have a link to the registration page. On this page we will have to fill in the same form as the login, but to register the user.
