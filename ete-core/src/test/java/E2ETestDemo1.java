import com.model.UserTable;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.Main;

/**
 * @author MarkHuang
 * @version <ul>
 * <li>2018/2/7, MarkHuang,new
 * </ul>
 * @since 2018/2/7
 */
@SpringBootTest(classes = Main.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class E2ETestDemo1 {

    @Test
    public void Test1() {
        System.out.println(UserTable.class.getName());
    }
}
