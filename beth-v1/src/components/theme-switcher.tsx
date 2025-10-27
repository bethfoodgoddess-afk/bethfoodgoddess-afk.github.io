import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Palette, Check } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslations } from 'next-intl';

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const t = useTranslations();

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={className}>
        <div className="sr-only">Loading theme switcher</div>
      </div>
    )
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const getBaseTheme = (theme: string | undefined): string => {
    if (!theme) return "default";
    if (theme.startsWith("mexico")) return "mexico";
    if (theme.startsWith("day-of-the-dead")) return "day-of-the-dead";
    if (theme.startsWith("ai-passion")) return "ai-passion";
    if (theme.startsWith("future-world")) return "future-world";
    if (theme.startsWith("modern-tech")) return "modern-tech";
    return "default";
  }

  const baseTheme = getBaseTheme(currentTheme);

  const mode = currentTheme?.endsWith("dark") ? "dark" : "light";

  const handleBaseThemeChange = (newBaseTheme: string) => {
    localStorage.setItem('user-theme-choice', 'true');
    if (newBaseTheme === baseTheme) return; // No change
    if (newBaseTheme === "default") {
      setTheme(mode);
    }
    else {
      setTheme(`${newBaseTheme}-${mode}`);
    }
  };

  const handleModeChange = (newMode: string) => {
    localStorage.setItem('user-theme-choice', 'true');
    if (newMode === (currentTheme?.endsWith("dark") ? "dark" : "light")) return; // No change
    if (baseTheme === "default") {
      setTheme(newMode);
    }
    else {
      setTheme(`${baseTheme}-${newMode}`);
    }
  };

  return (
    <div className="flex space-x-2">
      <TooltipProvider>
        <Tooltip>
          <DropdownMenu>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className={className}>
                  <Palette className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Select base theme</span>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleBaseThemeChange("ai-passion")}>
                {baseTheme === "ai-passion" && <Check className="w-4 h-4 mr-2" />}
                {t('common.theme.aiPassion')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleBaseThemeChange("mexico")}>
                {baseTheme === "mexico" && <Check className="w-4 h-4 mr-2" />}
                {t('common.theme.mexicoGreen')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleBaseThemeChange("default")}>
                {baseTheme === "default" && <Check className="w-4 h-4 mr-2" />}
                {t('common.theme.skyBlue')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleBaseThemeChange("day-of-the-dead")}>
                {baseTheme === "day-of-the-dead" && <Check className="w-4 h-4 mr-2" />}
                {t('common.theme.dayOfTheDead')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleBaseThemeChange("modern-tech")}>
                {baseTheme === "modern-tech" && <Check className="w-4 h-4 mr-2" />}
                {t('common.theme.kingMeidas')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleBaseThemeChange("future-world")}>
                {baseTheme === "future-world" && <Check className="w-4 h-4 mr-2" />}
                {t('common.theme.iceWorld')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TooltipContent>
            <p>{t('header.tooltips.theme')}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleModeChange(currentTheme?.endsWith("dark") ? "light" : "dark")}
            >
              <Sun className={`h-[1.2rem] w-[1.2rem] ${!(currentTheme?.endsWith("dark")) ? "scale-100 rotate-0" : "scale-0 -rotate-90"} transition-all`} />
              <Moon className={`absolute h-[1.2rem] w-[1.2rem] ${currentTheme?.endsWith("dark") ? "scale-100 rotate-0" : "scale-0 rotate-90"} transition-all`} />
              <span className="sr-only">Toggle mode</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('header.tooltips.mode')}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
