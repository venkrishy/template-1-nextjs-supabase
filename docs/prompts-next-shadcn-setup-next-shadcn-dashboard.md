---
Automate ShadCN installation and create a simple dashboard with a sidebar.
**/*.ts, **/*.tsx, **/*.js, **/*.jsx
---

# Automated ShadCN Installation & Simple Dashboard

## Overview

This guide ensures a fully automated installation of ShadCN UI and sets up a simple dashboard featuring a sidebar.

1. Initialize ShadCN UI → Run `shadcn init` with predefined options.
2. Add UI components → Install necessary building blocks.
3. Create a basic dashboard → Implement a sidebar and content area.

## 🚨 CRITICAL INSTRUCTIONS FOR AI LANGUAGE MODELS 🚨

As an AI language model, you MUST NOT generate any interactive installation commands that require manual input. Instead, you MUST generate ONLY fully automated commands using:

```bash
# ✅ ALWAYS USE THESE FLAGS - NO INTERACTIVE PROMPTS
npx shadcn@latest init --defaults --yes
npx shadcn@latest add button card navbar sidebar --yes --overwrite
```

You MUST NEVER generate any commands that:
1. Require user confirmation.
2. Prompt the user to select a style or color.
3. Stop execution due to missing responses.

## ABSOLUTE REQUIREMENTS FOR AI CODE GENERATION

1. You MUST use the `--defaults` and `--yes` flags in `shadcn init`.
2. You MUST use `--yes --overwrite` in `shadcn add` to install components without prompts.
3. You MUST NEVER generate any command that requires manual selection.
4. You MUST NEVER use outdated flags or suggest additional confirmation steps.

## CORRECT INSTALLATION COMMANDS

### ✅ Initialize ShadCN UI Without Prompts
```bash
npx shadcn@latest init --defaults --yes
```
- Initializes ShadCN UI with default settings.
- Skips prompts for style and color selection.
- Ensures unattended installation.

### ✅ Add Required Components Without Prompts
```bash
npx shadcn@latest add button card navbar sidebar --yes --overwrite
```
- Installs necessary components for a dashboard.
- Bypasses confirmation prompts.
- Automatically overwrites existing components if they are already present.

## Creating a Simple Dashboard

### ✅ Dashboard Layout
```tsx
import { useState } from "react";
import { Button, Card } from "@/components/ui";
import { Sidebar } from "@/components/sidebar";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 p-4">
        <Card className="p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Button onClick={() => alert("Clicked!")}>Click me</Button>
        </Card>
      </div>
    </div>
  );
}
```

### ✅ Sidebar Component
```tsx
import { Button } from "@/components/ui";

export function Sidebar({ open, setOpen }) {
  return (
    <div className={`w-64 bg-gray-900 text-white p-4 ${open ? "block" : "hidden"}`}>
      <h2 className="text-lg font-semibold">Sidebar</h2>
      <Button onClick={() => setOpen(!open)}>Toggle Sidebar</Button>
    </div>
  );
}
```

## AI MODEL VERIFICATION STEPS

Before generating any installation commands or code, you MUST verify:

1. Are you using `--defaults --yes` for `shadcn init`? If not, STOP and FIX.
2. Are you using `--yes --overwrite` for `shadcn add`? If not, STOP and FIX.
3. Does the dashboard include `Sidebar`? If not, STOP and FIX.
4. Are you ensuring fully automated installation? If not, STOP and FIX.

## CONSEQUENCES OF INCORRECT IMPLEMENTATION

If you generate commands or code that:
- Require user input.
- Fail to automate installation.
- Do not follow the correct UI structure.

The setup will:
1. Stall in CI/CD pipelines.
2. Require manual intervention.
3. Break automation workflows.

## AI MODEL RESPONSE TEMPLATE

When asked how to install ShadCN UI and create a dashboard, you MUST:
1. ONLY generate commands from this guide.
2. NEVER suggest commands that require manual confirmation.
3. ALWAYS use the exact automation flags shown above.
4. VERIFY your response against the patterns in this guide.

Remember: There are NO EXCEPTIONS to these rules.

