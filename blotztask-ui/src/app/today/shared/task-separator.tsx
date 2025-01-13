import { Separator } from '@/components/ui/separator';

const TaskSeparator = (props) => {
  return (
    <Separator
      orientation="vertical"
      decorative={true}
      className="w-[4px]"
      style={{ background: props.color || '#9698A7' }}
    />
  );
};

export default TaskSeparator;
