import Field from "./Field";
import { camelToTitleCase } from "../modules/utils";
import { Fragment } from "react";

export default function Item({
  isEditable,
  item,
  collectionKey,
  updateItem,
  children,
}) {
  function scaffoldItem([fieldKey, value]) {
    if (fieldKey === "id") return;
    return (
      <Field
        key={`${fieldKey}`}
        {...{
          label: camelToTitleCase(fieldKey),
          collectionKey,
          itemId: item.id,
          fieldKey,
          value,
          onChange: updateItem,
        }}
      />
    );
  }

  function scaffoldText([fieldKey, value]) {
    if (fieldKey === "id") return;
    return (
      <Fragment key={fieldKey}>
        <h3>{camelToTitleCase(fieldKey)}</h3>
        <h4>{value}</h4>
      </Fragment>
    );
  }

  return (
    <div className="item">
      {isEditable
        ? Object.entries(item).map(scaffoldItem)
        : Object.entries(item).map(scaffoldText)}
      {isEditable && children}
    </div>
  );
}
