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

function SortableItem({ id, label, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={clsx("relative", isDragging && "opacity-80")}> 
      <button
        type="button"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/80 px-2 py-1 text-xs text-steel shadow-soft"
        {...attributes}
        {...listeners}
        aria-label={label}
      >
        {label}
      </button>
      {children}
    </div>
  );
}

export default function EntryList({ items = [], onChange, createItem, renderItem, addLabel }) {
  const { t } = useTranslation();
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));
  const dragLabel = t("actions.reorder");

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    onChange(arrayMove(items, oldIndex, newIndex));
  };

  const updateItem = (id, patch) => {
    onChange(items.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const removeItem = (id) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} label={dragLabel}>
                {renderItem(item, (patch) => updateItem(item.id, patch), () => removeItem(item.id))}
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <button type="button" className="btn-secondary w-full" onClick={() => onChange([...(items || []), createItem()])}>
        {addLabel}
      </button>
    </div>
  );
}