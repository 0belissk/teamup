package com.teamup.common;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HealthControllerTest {

    @Test
    void healthReturnsUpStatus() {
        HealthController controller = new HealthController();

        var response = controller.health();

        assertEquals("teamup-api", response.get("service"));
        assertEquals("UP", response.get("status"));
    }
}