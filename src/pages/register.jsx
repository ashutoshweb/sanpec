import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

import { SlimLayout } from '@/components/SlimLayout'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - Sanpec</title>
      </Head>
      <div className="flex">
        <Link href="/" aria-label="Home"></Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          id="first_name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          id="last_name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          id="referral_source"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </>
  )
}

Register.Layout = SlimLayout
