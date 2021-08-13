package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
  //Get User By Id
  	public Optional<User> findById(long id) {
  		return userRepository.findById(id);
  	}	
  	
  	//Delete User
  	public void delete(long id) {
  		userRepository.deleteById(id);
  	}

	@Override
	public User findAll() {
		
		return  (User) userRepository.findAll();
	}
  	
  	
  	
  	
     
}
