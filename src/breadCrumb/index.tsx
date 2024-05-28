import React, { ComponentType, ElementType } from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import "./ant-breadcrumb-override.scss";

export type IBreadCrumbItemsTypes = IArrayWithMinLength<IItem, 2>;
interface IItem extends ICommonInterIndex {
  title: string;
  as?: ComponentType | ElementType;
  [breadcrumbProps: string]: any;
}
interface IProps {
  items: IBreadCrumbItemsTypes;
  onClick?: ({ menu, menuIndex }: { menu: IItem; menuIndex: number }) => void;
}

/**
 * Represents a Breadcrumb component that can be customized with different props.
 *  @param items [`Minimum length of 2`] - An array of objects, each containing a title and an onClick handler.
 *  @param onClick - Called when an item is clicked. Returns an object with the menu and menuIndex of the clicked item.
 */
export default function BreadCrumb({ items, onClick }: IProps) {
  function handleOnClick(menu: IItem, menuIndex: number, isLastItem: boolean) {
    return () => {
      if (!isLastItem && onClick) {
        onClick({ menu, menuIndex });
      }
    };
  }
  return (
    <AntBreadcrumb
      rootClassName="dt-breadcrumb"
      items={items.map((item:IItem, index:number) => {
        const isLastItem = index >= items.length - 1;
        const { title, as: Tag = "button", ...props } = item;
        return {
          title: isLastItem ? (
            title
          ) : (
            <Tag key={`${title}-${index + 1}`} {...props}>
              {title}
            </Tag>
          ),
          onClick: handleOnClick(item, index, isLastItem),
        };
      })}
    />
  );
}
