import BillingHistory from "../../components/BillingHistory";
import HeaderSection from "@/components/HeaderSection";


const TestComponents = () => {
    return (
        <>
            <HeaderSection
                heading={'Plans and Billing'}
                subHeading={'Plans and Billing History'}
            />
            <BillingHistory />
        </>
    );
}

export default TestComponents;