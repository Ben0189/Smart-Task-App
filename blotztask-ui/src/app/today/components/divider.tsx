import SectionSepreator from './section-seperator';

interface DividerProps {
  text:string;
}
const Divider = ({text}:DividerProps) => {
  return (
    <div className="flex items-center space-x-7">
      <p className="font-hind font-semibold text-[40px] leading-[48px] text-primary-dark -tracking-[0.41]">
        {text}
      </p>
      <SectionSepreator />
    </div>
  );
};

export default Divider;
