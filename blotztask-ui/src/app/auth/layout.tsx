import BrandingSection from "./components/branding-section";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex container relative h-screen flex-rows items-center justify-center lg:max-w-none lg:px-0">
      <BrandingSection />

      <div className="flex-[3] lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
}
