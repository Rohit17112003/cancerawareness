import Input from "@/components/atoms/Input";
import Image from "next/image";

const SignUp = () => {
  return (
    <main>
      <section className="grid h-screen lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6 px-5 py-10">
          <h2 className="text-center text-3xl font-bold">SIGN UP</h2>
          <form className="space-y-4 lg:w-[60%]" action="">
            <Input placeholder="Name" />
            <Input placeholder="Number" />
            <Input placeholder="Email" />
            <Input placeholder="Aadhar No." />
            <Input placeholder="PAN No." />
            <Input placeholder="City" />
            <Input placeholder="Category" />
            <Input placeholder="Bank No." />
            <Input placeholder="IFSC COde" />
            <Input placeholder="GST No." />
            <Input placeholder="Refer Code" />
            <label className="flex items-start gap-2" htmlFor="">
              <input type="checkbox" />
              By joining, I declare that I have read and accent the Terms and
              Privacy Policy
            </label>
          </form>
          <button className="rounded-full bg-[#3D48B7] px-10 py-3 text-lg font-semibold text-white">
            SIGN UP
          </button>
        </div>
        <div className="hidden h-screen w-full items-center justify-center bg-gradient-to-b from-[#0078D4] to-[#3D48B7] lg:flex">
          <div className="relative h-[80%] w-[75%] rounded-xl border border-white/40 bg-white/30 p-10 backdrop-blur backdrop-brightness-95">
            <Image
              className="absolute bottom-16 -left-8 h-16 w-16 object-cover"
              src="/image/icon/lightning.png"
              alt="lightning"
              width={100}
              height={100}
            />
            <Image
              className="absolute right-0 bottom-0 h-[85%] object-cover"
              src="/image/man.png"
              alt="man"
              width={1200}
              height={1200}
            />
            <h2 className="w-[80%] text-3xl font-semibold text-white">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
