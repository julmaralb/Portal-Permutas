package controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import forms.UsuarioForm;
import security.UserAccount;
import services.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	// Registra un nuevo usuario

	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	ResponseEntity<Collection<UserAccount>> get() {

		Collection<UserAccount> userAccount = usuarioService.findAll();

		return new ResponseEntity<Collection<UserAccount>>(userAccount, HttpStatus.OK);

	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	void register(@RequestBody UsuarioForm user) {

		usuarioService.reconstruct(user);

	}

	// Busca el usuario por su id

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = "application/json")
	ResponseEntity<UserAccount> findByUserId(@PathVariable String id) {

		UserAccount res;

		// checkprincipal
		res = usuarioService.findOne(id);

		if (res == null) {
			return new ResponseEntity<UserAccount>(HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<UserAccount>(res, HttpStatus.OK);
	}

	// Modifica el perfil del usuario logeado

	@RequestMapping(value = "/modifica/{id}", method = RequestMethod.PUT)
	public ResponseEntity<UserAccount> updatePlaza(@RequestBody UserAccount usuario) {

		if (usuario == null) {
			return new ResponseEntity<UserAccount>(HttpStatus.NOT_FOUND);
		}

		usuarioService.modificaUserAccount(usuario);
		return new ResponseEntity<UserAccount>(usuario, HttpStatus.OK);
	}

}
