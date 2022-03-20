package com.example.seater_backend.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity(name="room")
public class Room {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private boolean isAssigned;

    private boolean isAssignedToTeam;

    @OneToOne
    private User roomAdministrator;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Workstation> workstations;

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    @OneToMany(cascade = CascadeType.ALL)
    private List<Reservation> reservations;

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

    public List<Workstation> getWorkstations() {
        return workstations;
    }

    public void setWorkstations(List<Workstation> workspaces) {
        this.workstations = workspaces;
    }

    public boolean isAssignedToTeam() {
        return isAssignedToTeam;
    }

    public void setAssignedToTeam(boolean assignedToTeam) {
        isAssignedToTeam = assignedToTeam;
    }

}
