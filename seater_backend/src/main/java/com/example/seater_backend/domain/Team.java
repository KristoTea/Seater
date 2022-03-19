package com.example.seater_backend.domain;

import javax.persistence.*;
import java.util.List;

@Entity(name="team")
public class Team {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToOne
    @JoinColumn(name="team_admin_id", nullable=false)
    private User teamAdmin;

    @OneToMany(cascade = CascadeType.ALL)
    private List<User> members;

    public Long getId() {
        return id;
    }

    public User getTeamAdmin() {
        return teamAdmin;
    }

    public void setTeamAdmin(User teamAdmin) {
        this.teamAdmin = teamAdmin;
    }

    public List<User> getMembers() {
        return members;
    }

    public void setMembers(List<User> members) {
        this.members = members;
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

}
