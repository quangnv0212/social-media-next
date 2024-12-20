import HomePage from "@/components/home-page";
import Sidebar from "@/components/partials/sidebar";
import ProMembers from "@/components/user/pro-members";
import Product from "@/components/user/product";
import Stories from "@/components/user/stories";
import SuggestionPeople from "@/components/user/suggestion-people";
import Trends from "@/components/user/trends";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      <div className="hidden lg:block">1</div>
      <div className="">
        <Stories />
        <HomePage />
      </div>
      <div className="hidden md:block">
        <SuggestionPeople />
        <Product />
        <Trends />
        <ProMembers />
      </div>
    </div>
  );
}
