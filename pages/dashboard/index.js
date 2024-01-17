import DashboardLayout from "@/layout/dashboardLayout";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  if (session?.status === "authenticated") {
    router.push("/dashboard/clubs");
  }

  const loginUser = async (e) => {
    e.preventDefault();
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully!");
      }
    });
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/images/icons/gold.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={loginUser}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-main py-2 px-4 text-sm font-medium text-white shadow-sm "
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
