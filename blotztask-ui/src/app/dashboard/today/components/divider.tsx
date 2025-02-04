import SectionSeparator from './section-separator';

interface DividerProps {
  text:string;
}
const Divider = ({text}:DividerProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <p className="font-hind font-semibold text-[40px] leading-[48px] text-primary-dark -tracking-[0.41px]">
        {text}
      </p>
      <SectionSeparator />
    </div>
  );
};

export default Divider;
