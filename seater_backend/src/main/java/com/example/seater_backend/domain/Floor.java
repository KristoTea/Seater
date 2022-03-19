package com.example.seater_backend.domain;

import javax.persistence.*;
import java.util.List;

@Entity(name="floor")
public class Floor {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private List<User> rooms;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getRooms() {
        return rooms;
    }

    public void setRooms(List<User> rooms) {
        this.rooms = rooms;
    }

}
