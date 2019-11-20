/*
Requeriments
Todo email consiste de un nombre local y un nombre de dominio, separado por el símbolo
@.
Por ejemplo, pedro@kavak.com , pedro es el nombre local y kavak.com es el nombre de
dominio.
Pueden contener letras mayúsculas y minúscula los emails pueden contener puntos (’.’) y
más (‘+’).

Si contiene un punto (‘.’) entre dos caracteres del nombre local el email será enviado a la
misma dirección sin el punto. Por ejemplo, pe.dro@kavak.com y pedro@kavak.com envían
a la misma dirección. (Note que esto solo aplica a la parte del nombre local).

Si contiene un más (‘+’) en el nombre local, todo lo que venga después del más seŕa
ignorado. Esto permite que alguno emails sean filtrados, por ejemplo
pedro+perez@kavak.com será enviado a pedro@kavak.com. (Note que esto solo aplica a la
parte del nombre local).

Es posible aplicar las dos reglas al mismo tiempo.
Dada una lista de emails válidos, se envía un email a cada una de las direcciones de la
lista. Cuántas direcciones diferentes reciben un email?
*/

const emails = [
 'test.email+alex@kavak.com',
 'test.e.mail+bob.cathy@kavak.com',
 'testemail+david@ka.vak.com',
 'dev.eddy+enriqueybeto@eddyarellanes.dev',
 'dev@eddyarellanes.dev', //Case when I don't send '.' and '+'
 'heladodechocolate' //Case for No valid mails
]


var emailsUnicos = function(emails) {
	//Remove not valid emails
	const emailsValids = emails.filter( e => e.indexOf('@') !== -1 )

	//Remove dots from the local part of the email
	const emailsDotless = emailsValids.map( e => {

		let emailParts = e.split('@') 
		let localName = emailParts[0]
		let domain = '@'+ emailParts[1]

		return localName.split('.').join("") + domain
	})	
	//Remove string after +
	const emailsFiltered = emailsDotless.map( e => {

		let emailParts = e.split('@')
		let localName = emailParts[0]
		let domain = '@'+ emailParts[1]
		
		let localNameFiltered = localName.indexOf('+')

		return ( localName.indexOf('+') !== -1) 
			? localName.split('+')[0] + domain 
			: localName + domain		
	})

	return emailsFiltered
}

console.log( emailsUnicos(  emails))
