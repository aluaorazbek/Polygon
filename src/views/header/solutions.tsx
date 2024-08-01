import SolutionsImgIcon from "#/public/ui/header-solutions-1.svg";

import HeaderImgPlaceholder from "#/src/components/header-img-placeholder";
import HeaderLink from "#/src/components/header-link";

export const SolutionsHeader = () => (
  <section className="w-[40.5rem] flex bg-gray-400 p-2 gap-8">
    <div className="flex flex-col gap-3">
      <HeaderImgPlaceholder />
      <HeaderLink
        img={<SolutionsImgIcon height={48} width={48} />}
        desc="Build Ethereum layer2s with industry leading ZK tech"
        href="https://polygon.technology/"
      >
        Polygon CDK
      </HeaderLink>
    </div>

    <div className="flex flex-col gap-3">
      <HeaderLink
        img={<SolutionsImgIcon height={48} width={48} />}
        desc="An EVM enabled sidechain"
        href="https://polygon.technology/"
      >
        Polygon PoS
      </HeaderLink>
      <HeaderLink
        img={<SolutionsImgIcon height={48} width={48} />}
        desc="An EVM equivalent, open-source zk-Rollup"
        href="https://polygon.technology/"
      >
        Polygon zkEVM
      </HeaderLink>
      <HeaderLink
        img={<SolutionsImgIcon height={48} width={48} />}
        desc="Build Ethereum layer2s with industry leading ZK tech"
        href="https://polygon.technology/"
      >
        Polygon-Miden
      </HeaderLink>
    </div>
  </section>
);
