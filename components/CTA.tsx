import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">
        Kickstart your personalized learning journey.
      </div>
      <h2 className="text-3xl font-bold">
        Create and Customize Your AI Learning Partner
      </h2>
      <p>
        Choose a name, subject, voice, and personality — then dive into
        interactive voice-based learning that's engaging and intuitive.
      </p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Create a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default Cta;
