import { DndContext, PointerSensor, useSensor, useSensors, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

function SortableSection({ id, label, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={clsx("space-y-3", isDragging && "opacity-80")}>
      <div className="flex justify-end">
        <button
          type="button"
          className="badge"
          {...attributes}
          {...listeners}
          aria-label={label}
        >
          {label}
        </button>
      </div>
      {children}
    </div>
  );
}

export default function DraggableSectionList({ items, onChange, renderItem }) {
  const { t } = useTranslation();
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const dragLabel = t("actions.reorder");

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);
    onChange(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-6">
          {items.map((id) => (
            <SortableSection key={id} id={id} label={dragLabel}>
              {renderItem(id)}
            </SortableSection>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
