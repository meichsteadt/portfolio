import Box from "../../components/Box/Box";
import Cover from "../../components/Cover/Cover";
import Stack from "../../components/Stack/Stack";
import Switcher from "../../components/Switcher/Switcher";

interface Props {}

const About = (props: Props) => {
  return (
    <div id="about">
      <Cover>
        <Stack>
          <h2>Here's some stuff I've worked on</h2>
          <Switcher>
            <Box>
              <Stack>
                <h3>Articulate</h3>
              </Stack>
            </Box>

            <Box>
              <Stack>
                <h3>LoveSeat</h3>
              </Stack>
            </Box>
          </Switcher>

          <Switcher>
            <Box>
              <Stack>
                <h3>Homelegance</h3>
              </Stack>
            </Box>

            <Box>
              <Stack>
                <h3>Learning</h3>
              </Stack>
            </Box>
          </Switcher>
        </Stack>
      </Cover>
    </div>
  );
};

About.defaultProps = {};

export default About;
