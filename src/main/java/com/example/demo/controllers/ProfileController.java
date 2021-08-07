package com.example.demo.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.services.EmployeeService;


@Controller
public class ProfileController {
	@Autowired private EmployeeService employeeService;
	
	@RequestMapping(value="/profile") 
	public String profile(Model model, Principal principal) {
		
		String user=principal.getName();
		model.addAttribute("employee", employeeService.findByUsername(user));
		return "profile";
	}
	
}
