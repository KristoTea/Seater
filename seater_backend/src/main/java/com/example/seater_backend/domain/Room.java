package com.example.seater_backend.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity(name="room")
public class Room {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private boolean isAssigned;

    @OneToOne
    private User roomAdministrator;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Workstation> workspaces;

    @ElementCollection
    private List<Date> reservations;

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

    public boolean isAssigned() {
        return isAssigned;
    }

    public void setAssigned(boolean assigned) {
        isAssigned = assigned;
    }

    public User getRoomAdministrator() {
        return roomAdministrator;
    }

    public void setRoomAdministrator(User roomAdministrator) {
        this.roomAdministrator = roomAdministrator;
    }

    public List<Workstation> getWorkspaces() {
        return workspaces;
    }

    public void setWorkspaces(List<Workstation> workspaces) {
        this.workspaces = workspaces;
    }

    public List<Date> getReservations() {
        return reservations;
    }

    public void setReservations(List<Date> reservations) {
        this.reservations = reservations;
    }
}
