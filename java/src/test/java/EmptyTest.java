import org.junit.Test;

import static org.junit.Assert.*;

public class EmptyTest {
    @Test
    public void successTest() {
        assertEquals(true, true);
    }

    @Test
    public void failTest() {
        assertEquals(true, false);
    }
}