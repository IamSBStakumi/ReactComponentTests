import Button from "@/styles/Buttons";
import Explanation from "@/styles/Explanation";

const Page = () => (
  <main>
    <div>
      <Button>
        テストコンポーネント<Explanation $parent={Button}>説明</Explanation>
      </Button>
    </div>
  </main>
);

export default Page;
