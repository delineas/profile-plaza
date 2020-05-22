# Cómo añadir tu perfil a reactivers

## 1. Haz un fork de este repositorio

Arriba a la derecha encontrarás el botón `fork` si estás viendo esto en github.com

## 2. Modifica el fichero JSON para añadir tu perfil

Edita el fichero  `/static/profiles.json`-

Añade tus datos al final. 

**Recuerda no terminar con una coma**

Un ejemplo que puedes copiar y pegar para luego modificar:

```json
    {
        "name": "Cris García",  // Tu nombre
        "headline": "¡Las personas somos lo importante!", // Una frase que te identifique
        "status": "💃", // Un emoji que identifique tu estado
        "flag": "🇯🇲", // Una bandera en formato emoji
        "main_skill": "Frontend", // Puedes elegir una de estas: Full Stack|Frontend|Backend|Mobile|Devops|UI/UX|Designer
        "skills": [ // Añade hasta un máximo de 6
            "HTML",
            "CSS",
            "Web"
        ],
        "website": "https://webreativa.com", // Tu página web
        "twitter": "https://twitter.com/webreactiva", // Tu perfil de twitter
        "github": "https://github.com/webreactiva" // Tu perfil de github
    }

```

Añádelo a tu repositorio con un Commit. Si lo haces en el editor online verás como aparece esa opción al final de la caja de texto.

## 3. Haz un Pull Request al repositorio oficial

Vete a la pestaña de Pull Request y abre uno.

## 4. Espera a que la validación del fichero JSON termine

Si la validación de la modificación que has hecho es correcta, aparecerá en verde.

## 5. Espera unos días a la confirmación

El *owner* del repositorio hará un Merge y tu ficha pasará a formar parte de reactivers.

Si hay algo incorrecto, te lo hará saber en la petición de Pull Request.