package com.example.demo.services;

import java.util.Optional;

import com.example.demo.models.User;


public interface UserService {
    void save(User user);

    User findByUsername(String username);

	Optional<User> findById(long id);

	void delete(long id);

	User findAll();
}
