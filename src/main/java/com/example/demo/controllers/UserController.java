package com.example.demo.controllers;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.models.User;
import com.example.demo.services.SecurityService;
import com.example.demo.services.UserService;
import com.example.demo.validator.UserValidator;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserValidator userValidator;
    
  

    @GetMapping("/registration")
    public String registration(Model model) {
        if (securityService.isAuthenticated()) {
            return "redirect:/";
        }

        model.addAttribute("userForm", new User());

        return "registration";
    }

    @PostMapping("/registration")
    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult) {
        userValidator.validate(userForm, bindingResult);

        if (bindingResult.hasErrors()) {
            return "registration";
        }

        userService.save(userForm);

        securityService.autoLogin(userForm.getUsername(), userForm.getPasswordConfirm());

        return "redirect:/index";
    }

    @GetMapping("/login")
    public String login(Model model, String error, String logout) {
        if (securityService.isAuthenticated()) {
            return "redirect:/";
        }

        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }

  	@RequestMapping("users/findById") 
  	@ResponseBody
  	public Optional<User> findById(long id)
  	{
  		return userService.findById(id);
  	}
  	
  	
  	
  	@RequestMapping(value="users/update", method = {RequestMethod.PUT, RequestMethod.GET})
  	public String update(User user) {
  		userService.save(user);
  		return "redirect:/users";
  	}
  	
  	@RequestMapping(value="users/delete", method = {RequestMethod.DELETE, RequestMethod.GET})	
  	public String delete(long id) {
  		userService.delete(id);
  		return "redirect:/users";
  	}
  	
}
