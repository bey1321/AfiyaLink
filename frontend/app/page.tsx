import Image from "next/image";
import { Button } from "../components/ui/button"; // shadcn/ui button
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 px-6 sm:px-20 py-12">
      {/* 1️⃣ Hero Section */}
      <section className="text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Inclusive Digital Health for Everyone
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          Breaking language and accessibility barriers to healthcare in the MENA region.
        </p>
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <Button variant="default">Try Demo</Button>
          <Button variant="outline">Watch Video</Button>
        </div>
        <Image
          src="/mockup-phone.png"
          alt="App mockup"
          width={400}
          height={600}
          className="mt-6"
        />
      </section>

      {/* 2️⃣ Problem Section */}
      <section className="flex flex-col gap-10">
        <h2 className="text-3xl font-semibold text-center">The Problem</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🗣 Language Barriers</CardTitle>
            </CardHeader>
            <CardContent>
              Patients and doctors often speak different languages, causing miscommunication.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>♿ Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              Visually and hearing-impaired users face barriers accessing healthcare.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🌍 Low Connectivity</CardTitle>
            </CardHeader>
            <CardContent>
              Rural and refugee areas often lack reliable internet.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🏥 Navigation Tools</CardTitle>
            </CardHeader>
            <CardContent>
              People struggle to find local clinics, pharmacies, and insurance providers.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3️⃣ How It Works Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-3xl font-semibold text-center">How AfiyaLink Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🧠 Real-time Translation</CardTitle>
            </CardHeader>
            <CardContent>Arabic ↔ English & dialects for doctor-patient communication.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🗣 Voice Assistant</CardTitle>
            </CardHeader>
            <CardContent>Hands-free navigation for visually impaired users.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📡 Offline Mode</CardTitle>
            </CardHeader>
            <CardContent>Access basic medical info without internet.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📍 Clinic Finder</CardTitle>
            </CardHeader>
            <CardContent>Locate nearby clinics, pharmacies, and insurance options.</CardContent>
          </Card>
        </div>
      </section>

      {/* 4️⃣ Impact & Metrics Section */}
      <section className="flex flex-col gap-8 text-center">
        <h2 className="text-3xl font-semibold">Impact & Metrics</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>App Usage</CardTitle>
            </CardHeader>
            <CardContent>Number of downloads and active sessions.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent>Usability ratings by visually/hearing impaired users.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Offline Impact</CardTitle>
            </CardHeader>
            <CardContent>Percentage of usage in offline mode.</CardContent>
          </Card>
        </div>
      </section>

      {/* 5️⃣ Call-to-Action */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-6">Join our pilot program or support development of AfiyaLink.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="default">Join Pilot</Button>
          <Button variant="outline">Partner With Us</Button>
        </div>
      </section>
    </div>
  );
}
