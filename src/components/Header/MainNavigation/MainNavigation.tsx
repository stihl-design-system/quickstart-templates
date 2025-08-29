'use client';

import classNames from 'classnames';
import { useState, type JSX } from 'react';

import {
  DSActionButton,
  DSButton,
  DSLinkButton,
  DSMegaMenu,
  DSScroller,
  DSText,
} from '@stihl-design-system/components';
import styles from './MainNavigation.module.scss';

export interface MainNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * The `<MainNavigation />`.
 *
 * Design in Figma: [Input File](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=6263-49213&t=za2PWr4WKOR5eYIE-11)
 */
export const MainNavigation = ({
  className,
  ...rest
}: MainNavigationProps): JSX.Element => {
  const mainNavigationClass = classNames(styles['main-navigation'], className);

  const [openMenu, setOpenMenu] = useState<'products' | 'accessories' | null>(
    null
  );

  function handleMenuChange(menu: 'products' | 'accessories', isOpen: boolean) {
    setOpenMenu(isOpen ? menu : null);
  }

  return (
    <DSScroller className={mainNavigationClass}>
      {/**
       * Screen readers read this out as "Main, Navigation". So there is no need to add "Navigation" manually to the aria-label.
       * Don't forget to translate it.
       */}
      <nav aria-label='Main' {...rest}>
        <ul>
          <li>
            <DSMegaMenu
              isOpen={openMenu === 'products'}
              onOpenChange={(isOpen) => handleMenuChange('products', isOpen)}
            >
              <DSMegaMenu.Anchor>
                <DSButton
                  variant='navigation'
                  iconName={'chevron-down'}
                  className={classNames(styles['chevron'], {
                    [styles['chevron--open']]: openMenu === 'products',
                  })}
                  iconPosition='right'
                  onClick={() =>
                    setOpenMenu(openMenu === 'products' ? null : 'products')
                  }
                >
                  Products
                </DSButton>
              </DSMegaMenu.Anchor>
              <DSMegaMenu.Content>
                <MegaMenuContentExample />
              </DSMegaMenu.Content>
            </DSMegaMenu>
          </li>
          <li>
            <DSMegaMenu
              isOpen={openMenu === 'accessories'}
              onOpenChange={(isOpen) => handleMenuChange('accessories', isOpen)}
            >
              <DSMegaMenu.Anchor>
                <DSButton
                  variant='navigation'
                  iconName={'chevron-down'}
                  className={classNames(styles['chevron'], {
                    [styles['chevron--open']]: openMenu === 'accessories',
                  })}
                  iconPosition='right'
                  onClick={() =>
                    setOpenMenu(
                      openMenu === 'accessories' ? null : 'accessories'
                    )
                  }
                >
                  Accessories
                </DSButton>
              </DSMegaMenu.Anchor>
              <DSMegaMenu.Content>
                <MegaMenuContentExample subMenu='accessories' />
              </DSMegaMenu.Content>
            </DSMegaMenu>
          </li>

          <li>
            <DSLinkButton
              variant='navigation'
              href='#'
              iconName='arrow-out'
              iconPosition='right'
              target='_blank'
            >
              Others
            </DSLinkButton>
          </li>
        </ul>
      </nav>
    </DSScroller>
  );
};

export const MegaMenuContentExample = ({
  subMenu,
  isReduced = false,
}: {
  subMenu?: 'products' | 'accessories';
  isReduced?: boolean;
}): JSX.Element => {
  const subMenuItems = {
    products: [
      'Sawing and cutting',
      'Mowing and planting',
      'Cleaning and clearing',
      'Garden size',
      'Offers and promotions',
      'Merchandise',
      'All products',
    ],
    accessories: [
      'STIHL sustainability strategy',
      'Education and people',
      'Economic sustainability',
      'Social engagement',
      'Climate strategy',
      'Environmental protection',
      'STIHL and the rainforest',
    ],
  };

  return (
    <div className={styles['mega-menu-content']}>
      <div className={styles['mega-menu-content-left']}>
        <ul>
          {(() => {
            // reduce to first 3 items if isReduced is set
            const items = subMenuItems[subMenu || 'products'];
            const visibleItems = isReduced ? items.slice(0, 3) : items;
            return visibleItems.map((item, index) => (
              <li key={index}>
                <DSActionButton
                  role='menuitem'
                  chevronDirection='right'
                  isActive={index === 0}
                >
                  {item}
                </DSActionButton>
              </li>
            ));
          })()}
        </ul>
      </div>
      <div className={styles['mega-menu-content-right']}>
        <DSText>
          Some content to show the showcase the scrollable area of the MegaMenu.
        </DSText>
        <div className={styles['mega-menu-placeholder']}>
          Placeholder scrollable
        </div>
        <DSText>
          Some content to show the showcase the scrollable area of the MegaMenu.
        </DSText>
      </div>
    </div>
  );
};
