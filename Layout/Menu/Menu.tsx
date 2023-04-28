import { useContext, KeyboardEvent, useState } from "react";
import { AppContext } from "../../context/app.coontext";
import { IFirstLevelMenuItem, PageItem } from "../../Interface/menu.interface";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

const variants = {
  visible: {
    marginBottom: 20,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: { marginBottom: 0 },
};
const variantsChildren = {
  visible: {
    opacity: 1,
    minHeight: 32,
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
};

export const Menu = (): JSX.Element => {
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();

  const { firstCategory, menu, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          //setMenu для обновления меню
          if (m._id.secondCategory == secondCategory) {
            setAnnounce(m.isOpened ? "closed" : "opened"); //условие написано наоборот тк в следующей строке мы меняем значение
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };
  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((menu) => (
          <li key={menu.route} aria-expanded={menu.id == firstCategory}>
            <Link legacyBehavior href={`/${menu.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id == firstCategory,
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id == firstCategory && buildSecondLevel(menu)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-exdanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return pages.map((p) => (
      <motion.li key={p._id} variants={variantsChildren}>
        <Link legacyBehavior href={`/${route}/${p.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            className={cn(styles.ThirdLevel, {
              [styles.ThirdLevelActive]:
                `/${route}/${p.alias}` == router.asPath,
            })}
            aria-current={
              `/${route}/${p.alias}` == router.asPath ? "page" : "false"
            }
          >
            {p.category}
          </a>
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <span role="log" className="visualyHidden">
          {announce == "opened" ? "развернуто" : "свернуто"}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
