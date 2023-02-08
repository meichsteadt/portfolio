import Cover from "../../components/Cover/Cover";
import Switcher from "../../components/Switcher/Switcher";
import Stack from "../../components/Stack/Stack";
import styles from "./Intro.module.css";
import Center from "../../components/Center/Center";

const Intro = () => {
  return (
    <>
      <Cover>
        <Switcher>
          <Center>
            <Stack>
              <h1>Hey!</h1>
              <h2>I'm Matt 👋</h2>
            </Stack>
          </Center>
          <Center>
            <div>
              <h2>I'm a:</h2>
              <ul className="text-[length:var(--s1)]">
                <li>✨ Fullstack dev ✨</li>
                <li>💎 Loyal rubyist</li>
                <li>💆 Clean code believer</li>
              </ul>
            </div>
          </Center>
        </Switcher>

        <Center>
          <a className="text-[length:var(--s1)]" href="#about">
            <span className="underline">Learn more!</span> &#9660;
          </a>
        </Center>
      </Cover>
    </>
  );
};

export default Intro;
